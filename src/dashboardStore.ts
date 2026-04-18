import { create } from "zustand";
import { useWorkflowStore } from "./store";

// Interface ko WorkflowStore ke Project structure se match kiya hai
export interface Project {
  id: string;
  name: string;
  lastUpdated: string; 
  nodeCount: number;
  thumbnail?: string; 
}

interface DashboardStore {
  projects: Project[];
  loadProjects: () => void;
  deleteProject: (id: string) => void;
  renameProject: (id: string, newName: string) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  projects: [],

  loadProjects: () => {
    // 1. WorkflowStore ki storage key se raw data uthao
    const raw = localStorage.getItem("cyberflow-storage");
    
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        // 2. Zustand persist data ko 'state' ke andar rakhta hai
        // WorkflowStore mein humne projects array banaya tha, wahi nikalna hai
        const workflowProjects = parsed.state?.projects || [];
        
        // Sorting: Latest projects pehle dikhein
        const sortedProjects = [...workflowProjects].sort((a, b) => 
          new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
        );

        set({ projects: sortedProjects });
      } catch (error) {
        console.error("Dashboard Sync Error:", error);
        set({ projects: [] });
      }
    } else {
      set({ projects: [] });
    }
  },

  deleteProject: (id) =>
    set((state) => {
      const updated = state.projects.filter((x) => x.id !== id);
      
      // 3. Sync back to WorkflowStore storage
      // Taaki refresh karne pe delete kiya hua project wapis na aa jaye
      const raw = localStorage.getItem("cyberflow-storage");
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (parsed.state) {
            parsed.state.projects = updated;
            localStorage.setItem("cyberflow-storage", JSON.stringify(parsed));
          }
        } catch (error) {
          console.error("Failed to sync deletion:", error);
        }
      }
      
      return { projects: updated };
    }),

  renameProject: (id, newName) => {
    const trimmed = newName.trim();
    if (!trimmed) return;

    // Persist via the main workflow store so Zustand persistence writes correctly.
    useWorkflowStore.getState().renameProject(id, trimmed);

    // Update dashboard UI immediately (without waiting for refresh/reload).
    const now = new Date().toLocaleString();
    set((state) => {
      const updated = state.projects.map((p) =>
        p.id === id
          ? {
              ...p,
              name: trimmed,
              lastUpdated: now,
            }
          : p
      );

      const sortedProjects = [...updated].sort(
        (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      );

      return { projects: sortedProjects };
    });
  },
}));

//  AUTO-SYNC ENGINE: 
// Jab bhi localStorage update ho (dusre tab ya workflow save se), dashboard refresh ho jaye
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === "cyberflow-storage") {
      useDashboardStore.getState().loadProjects();
    }
  });
}
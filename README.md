# Cyberflow v1  
Advanced Node-Based Workflow Simulation and Automation Engine  

Live Application: https://cyberflow-v1.vercel.app/  
Repository: https://github.com/anmol12-gib/Cyberflow-V1  

---

## Overview  
Cyberflow v1 is a fully developed visual workflow simulation and automation platform that enables users to design, execute, and analyze complex workflows using an intuitive node-based interface.

The system is built on a Directed Acyclic Graph (DAG) architecture to ensure safe and deterministic execution. It provides real-time visualization of data flow along with detailed performance analytics, making workflow behavior easier to understand and debug.

Cyberflow bridges the gap between traditional workflow automation tools and modern no-code systems by combining visual programming, execution simulation, and analytical reporting into a single platform.

---

## Objective  
The primary objectives of Cyberflow are:

- Enable no-code workflow creation through a visual interface  
- Simulate real-time data flow across connected nodes  
- Enforce graph integrity using DAG validation  
- Provide execution analytics such as payload, throughput, and latency  
- Simplify debugging and understanding of complex workflows  

---

## Core Features  

### Visual Workflow Builder  
- Drag-and-drop node-based interface  
- Modular node types including Trigger, Logic, Action, and Utility  
- Edge-based connections to define execution flow  

### Real-Time Simulation  
- Animated data packet traversal across edges  
- Immediate visual feedback for workflow execution  
- Improves debugging and conceptual clarity  

### Execution Engine  
- Custom asynchronous Breadth-First Search (BFS) traversal  
- Efficient node discovery and execution sequencing  
- Trigger-based execution model  

### DAG Validation  
- Real-time cycle detection  
- Prevents invalid workflows and infinite loops  
- Ensures execution safety  

### Reactive Execution Control  
- Non-blocking execution system  
- Automatic pause and resume for disabled nodes  
- Stable runtime behavior  

### Performance Analytics  
- Execution summary including:
  - Payload processed (KB)  
  - Throughput (KB/s)  
  - Latency insights  

### State Persistence  
- JSON-based import and export  
- Workflow serialization for reuse  

### History Management  
- Undo and redo functionality for workflow editing  

### UI/UX System  
- Dark-themed interface with clear visual hierarchy  
- Responsive and accessible design  

---

## System Architecture  

Cyberflow follows a state-driven architecture where the UI is a reactive representation of the underlying graph state.

### Workflow Model  
- Nodes represent computational units  
- Edges represent directed data flow  
- Entire workflow is structured as a Directed Acyclic Graph (DAG)  

### Execution Model  
- Traversal Algorithm: Breadth-First Search (BFS)  
- Execution Type: Asynchronous and event-driven  
- Validation Layer: Real-time cycle detection  

This architecture ensures predictable execution, high performance, and scalability.

---

## Technology Stack  

### Frontend  
- React 18 with Vite  
- React Flow for node graph rendering  
- Zustand for state management  
- Tailwind CSS and Shadcn UI for styling  
- Framer Motion for animation  

### Core Engineering  
- TypeScript for type safety  
- Dagre for automatic graph layout  
- Custom BFS engine for execution  

---

## Project Status  
The project is fully completed and production-ready. It has successfully evolved from a prototype into a complete workflow engine with execution, visualization, and analytics capabilities.

---

##Getting Started
Clone the repository
git clone https://github.com/anmol12-gib/Cyberflow-V1.git
cd Cyberflow-V1
Install dependencies
npm install
Run development server
npm run dev

---

##Use Cases
Workflow automation design and simulation
DevOps pipeline visualization
Data engineering flow modeling
Educational tool for graph algorithms
No-code system prototyping
Future Enhancements

---

##Acknowledgements

Inspired by workflow automation platforms such as Node-RED, n8n, Zapier, and Apache Airflow.

##Project Structure
Cyberflow-V1/
│
├── public/                     # Static assets
│
├── src/
│   ├── components/            # Reusable UI components
│   ├── nodes/                 # Custom node definitions
│   ├── edges/                 # Edge logic and styles
│   ├── store/                 # Zustand state management
│   ├── engine/                # BFS execution engine
│   ├── utils/                 # Helper functions
│   ├── hooks/                 # Custom React hooks
│   ├── layouts/               # Layout components
│   ├── styles/                # Tailwind and global styles
│   ├── App.tsx                # Main application component
│   └── main.tsx               # Entry point
│
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # Project documentation

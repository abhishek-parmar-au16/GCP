import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "./Login";
import { CChart } from "@coreui/react-chartjs"; // Dummy data for demonstration
const dummyProjects = [
  { id: 1, name: "Project 1" },
  { id: 2, name: "Project 2" },
];

const dummyServerInstances = [
  { id: 1, name: "Server 1", status: "Running", cpuUsage: 60, memoryUsage: 40 },
  { id: 2, name: "Server 2", status: "Stopped", cpuUsage: 0, memoryUsage: 0 },
];

const dummyFirewallRules = [
  { id: 1, rule: "Allow SSH from specific IP" },
  { id: 2, rule: "Deny ICMP traffic" },
];

const dummyObjectStorage = {
  used: "50 GB",
  free: "50 GB",
  hits: 1000,
};

// Login component

// Project list component
const ProjectList = ({ projects, onSelectProject }) => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => onSelectProject(project)}>
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Project details component
const ProjectDetails = ({ project }) => {
  return (
    <div>
      <h2>Project Details - {project.name}</h2>
      {/* Add links to service dashboards */}
    </div>
  );
};

// Server Instances dashboard component
const ServerInstancesDashboard = ({ serverInstances }) => {
  return (
    <div>
      <h2>Server Instances Dashboard</h2>
      <div
              style={{
                color: "grey",
                border: "1px solid grey",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <h3>Billing</h3>
              <p>Your billing for this month</p>
              <h5>$78.9</h5>
            </div>
      {/* Display graphs, charts, and controls for server instances */}
    </div>
  );
};

// Firewall dashboard component
const FirewallDashboard = ({ firewallRules }) => {
  return (
    <div>
      <h2>Request Per Seconds</h2>
      <CChart
                type="line"
                data={{
                  labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                  ],
                  datasets: [
                    {
                      label: "Request Per Seconds",
                      backgroundColor: "rgba(220, 220, 220, 0.2)",
                      borderColor: "rgba(165, 139, 143, 0.85)",
                      pointBackgroundColor: "rgba(220, 220, 220, 1)",
                      pointBorderColor: "#fff",
                      data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                    },
                    
                  ],
                }}
                // options={{
                //   plugins: {
                //     legend: {
                //       labels: {
                //         color: getStyle('--cui-body-color'),
                //       }
                //     }
                //   },
                //   scales: {
                //     x: {
                //       grid: {
                //         color: getStyle('--cui-border-color-translucent'),
                //       },
                //       ticks: {
                //         color: getStyle('--cui-body-color'),
                //       },
                //     },
                //     y: {
                //       grid: {
                //         color: getStyle('--cui-border-color-translucent'),
                //       },
                //       ticks: {
                //         color: getStyle('--cui-body-color'),
                //       },
                //     },
                //   },
                // }}
              />
      {/* Display number of rules and list of rules */}
    </div>
  );
};

// Object Storage dashboard component
const ObjectStorageDashboard = ({ objectStorage }) => {
  return (
    <div>
      <h2>Object Storage Dashboard</h2>
      {/* Display storage usage, free space, and number of hits */}
    </div>
  );
};

// Main App component
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const called = axios
      .get("https://servers.sanboxes.soulharsh007.dev")
      .then((res) => {
        console.log("res", res);
      });
  }, []);
  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      {!loggedInUser ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h1>Welcome, {loggedInUser}!</h1>
          {selectedProject ? (
            <ProjectDetails project={selectedProject} />
          ) : (
            <ProjectList
              projects={dummyProjects}
              onSelectProject={handleSelectProject}
            />
          )}
          

          {/* Add service dashboards */}
          {selectedProject && (
            <ServerInstancesDashboard serverInstances={dummyServerInstances} />
          )}
          {selectedProject && (
            <FirewallDashboard firewallRules={dummyFirewallRules} />
          )}
          {selectedProject && (
            <ObjectStorageDashboard objectStorage={dummyObjectStorage} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;

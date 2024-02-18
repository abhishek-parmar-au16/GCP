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
    <div style={{padding:"1rem"}}>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li
            key={project.name}
            onClick={() => onSelectProject(project?.services)}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Project details component
const ProjectDetails = ({ project, onSelectServices }) => {
  return (
    <div style={{padding:"1rem"}}>
      <h2 style={{color:"blue"}}>Services List</h2>

      {project.map((projecct) => (
        <li key={projecct.name} onClick={() => onSelectServices(projecct)}>
          {projecct.name}
        </li>
      ))}
      {/* Add links to service dashboards */}
    </div>
  );
};

// Server Instances dashboard component
const ServerInstancesDashboard = ({ serverInstances }) => {
  let serviceKey = Object.keys(serverInstances?.specs);
  let serviceValues = Object.values(serverInstances?.specs);
  console.log("ran", serviceKey);
  console.log("val", serviceValues);
  return (
    <div style={{padding:"1rem"}}>
      <h2 style={{color:"blue"}}>CPU Dashboard</h2>
      <div
        style={{
          color: "grey",
          border: "1px solid grey",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            {serviceKey.map((idx) => (
              <h3>{idx} {" "}</h3>
            ))}
          </div>
          <div>
            {serviceValues.map((idx) => (
              <h3>{" "}{idx}</h3>
            ))}
          </div>
        </div>
      </div>
      {/* Display graphs, charts, and controls for server instances */}
    </div>
  );
};

// Firewall dashboard component
const FirewallDashboard = ({ firewallRules }) => {
  const ObjectArr = firewallRules?.usage.map((idx) =>
    idx?.objects ? idx?.objects : idx?.memory ? idx.memory : idx?.size
  );
  console.log("pyar", ObjectArr);
  return (
    <div style={{padding:"1rem"}}>
      <h2 style={{color:"blue"}}>CPU Usage</h2>
      <CChart
        type="line"
        data={{
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [
            {
              label: "Request Per Seconds",
              backgroundColor: "rgba(220, 220, 220, 0.2)",
              borderColor: "rgba(165, 139, 143, 0.85)",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              data: ObjectArr,
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
  console.log("okok",objectStorage);
  return (
    <div style={{padding:"1rem"}}>
      <h2 style={{color:"blue"}}>Type and Slug Dashboard</h2>
      <div
        style={{
          color: "grey",
          border: "1px solid grey",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
              <h3>Slugs : {objectStorage?.slug}</h3>
              <h3>Type :{objectStorage?.type}</h3>
           
          </div>
        </div>
      </div>

      {/* Display storage usage, free space, and number of hits */}
    </div>
  );
};

// Main App component
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedservice, setSelectedservice] = useState(null);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer 8e7f39bb-a52c-4528-8202-1c76d3d9ba5f` },
    };
    const bodyParameters = {
      key: "value",
    };
    const called = axios
      .get(
        "https://servers.sanboxes.soulharsh007.dev/api/projects",
        config,
        bodyParameters
      )
      .then((res) => {
        console.log("res", res.data.data);
        setApiData(res.data.data);
      });
  }, []);
  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleSelectProject = (project) => {
    console.log("servisce", project);
    setSelectedProject(project);
  };

  const handleSelectServices = (project) => {
    console.log("servoce-- ", project);
    setSelectedservice(project);
  };

  return (
    <div>
      {!loggedInUser ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h1 style={{color:"red"}}>Welcome, {loggedInUser}!</h1>
          <div className="gulabzain" style={{ display: "flex" }}>
            {selectedProject ? (
              <ProjectDetails
                project={selectedProject}
                onSelectServices={handleSelectServices}
              />
            ) : (
              <ProjectList
                projects={apiData}
                onSelectProject={handleSelectProject}
              />
            )}

            {/* Add service dashboards */}
            {selectedservice && (
              <ServerInstancesDashboard serverInstances={selectedservice} />
            )}
            {selectedservice && (
              <FirewallDashboard firewallRules={selectedservice} />
            )}
            {selectedservice && (
              <ObjectStorageDashboard objectStorage={selectedservice} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

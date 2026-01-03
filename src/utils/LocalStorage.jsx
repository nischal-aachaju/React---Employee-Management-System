
const employees = [
  {
    "id": 1,
    "email": "employee1@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Login Page",
        "description": "Create responsive login UI using Tailwind CSS",
        "date": "2026-01-02",
        "category": "UI/UX",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Navbar Bug",
        "description": "Resolve alignment issue in mobile navbar",
        "date": "2026-01-01",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "API Integration",
        "description": "Integrate login API with frontend",
        "date": "2025-12-30",
        "category": "Backend",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Create Dashboard Layout",
        "description": "Build dashboard layout using React components",
        "date": "2026-01-03",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Optimize Images",
        "description": "Compress and optimize website images",
        "date": "2026-01-01",
        "category": "Performance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Write Unit Tests",
        "description": "Add unit tests for dashboard components",
        "date": "2025-12-29",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Database Schema Design",
        "description": "Design schema for task management system",
        "date": "2026-01-02",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Seed Initial Data",
        "description": "Insert dummy users and tasks",
        "date": "2026-01-01",
        "category": "Backend",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix Migration Error",
        "description": "Resolve database migration conflict",
        "date": "2025-12-28",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Create User Profile Page",
        "description": "Design and develop profile page UI",
        "date": "2026-01-03",
        "category": "UI/UX",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Implement Dark Mode",
        "description": "Add dark mode toggle using Tailwind",
        "date": "2026-01-01",
        "category": "Frontend",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Cross-browser Testing",
        "description": "Test UI on different browsers",
        "date": "2025-12-27",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Project Documentation",
        "description": "Write README and setup instructions",
        "date": "2026-01-02",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Deploy to Vercel",
        "description": "Deploy frontend project to Vercel",
        "date": "2026-01-01",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix Build Errors",
        "description": "Resolve production build issues",
        "date": "2025-12-26",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
]

const admin = [
  {
    "id": 101,
    "email": "admin@company.com",
    "password": "123"
  }
]


export const setLocalStorage=()=>{
    localStorage.setItem('employee',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees =JSON.parse(localStorage.getItem('employee'))
    const admin =JSON.parse(localStorage.getItem('admin'))
    console.log(employees,admin);
    
}



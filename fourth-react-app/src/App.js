import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MyTodo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";
import MyNavigationLinks from "./pages/MyNavigationLinks";
import MyTodoList from "./pages/MyTodoList";
import MyUserList from "./pages/MyUserList";
import ValidationDemo from "./pages/ValidationDemo";
import AppHome from "./pages/AppHome";
import AppLogin from "./pages/AppLogin";
import NitinPage from "./pages/ContactUs";
import JavaQuiz from "./components/javaQuiz";
import JsQuiz from "./components/jsQuiz";
import DbtQuiz from "./components/dbtQuiz";
import OsQuiz from "./components/osQuiz";
import DsaQuiz from "./components/dsaQuiz";
import AdminLogin from "./pages/AdminLogin";



function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavigationLinks />

        <Routes>
          {/** 1 Route means 1 Page */}
          <Route path="/" element={<AppLogin />} />
          <Route path="/login" element={<AppLogin />} />

          
         
          {/* <Route path="/" element={<AdminLogin />} /> */}
          <Route path="/AdminLogin" element={<AdminLogin />} />

          {/** Private Needs Protection */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <AppHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/todo"
            element={
              <ProtectedRoute>
                <MyTodo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/todo-list"
            element={
              <ProtectedRoute>
                <MyTodoList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user-list"
            element={
              <ProtectedRoute>
                <MyUserList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/javaQuiz"
            element={
              <ProtectedRoute>
                <JavaQuiz/>
              </ProtectedRoute>
            }
          />

          < Route
            path="/jsQuiz"
            element={
              <ProtectedRoute>
                <JsQuiz/>
              </ProtectedRoute>
            }
          />

<Route
            path="/dbtQuiz"
            element={
              <ProtectedRoute>
                <DbtQuiz/>
              </ProtectedRoute>
            }
          />

<Route
            path="/dsaQuiz"
            element={
              <ProtectedRoute>
                <DsaQuiz/>
              </ProtectedRoute>
            }
          />

<Route
            path="/osQuiz"
            element={
              <ProtectedRoute>
                <OsQuiz/>
              </ProtectedRoute>
            }
          />

          <Route
            path="/nitin-page"
            element={
              <ProtectedRoute>
                <NitinPage />
              </ProtectedRoute>
            }
          />

          <Route path="/registration" element={<MyRegistration />} />
          <Route path="/validation-demo" element={<ValidationDemo />} />

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// lets protect the pages
function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

export default App;

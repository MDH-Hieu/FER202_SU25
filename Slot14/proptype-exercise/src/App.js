import React from 'react';

// import UserProfile from "./components/UserProfile";

// function App() {
//   return (
//     // Ex1
//     <div className="App">
//       <h1>Ứng Dụng React</h1>

//       {/* Trường hợp hợp lệ */}
//       <UserProfile name="Nguyễn Văn A" age={25} />

//       {/* Trường hợp name không hợp lệ */}
//       <UserProfile name="" age={25} />

//       {/* Trường hợp tuổi không hợp lệ */}
//       <UserProfile name="Nguyễn Văn B" age="twenty five" />

//       {/* Trường hợp không nhập tuổi */}
//       <UserProfile name="Nguyễn Văn C" age={null} />
//     </div>

// }

// export default App;


//Example 3
// import MyForm from "./components/MyForm"; 

// const App = () => {
  
//   const handleFormSubmit = (formData) => {
//     console.log("Dữ liệu đã gửi:", formData);
//   };

//   return (
//     <div className="App">
//       <h1>Ứng Dụng React</h1>
//       <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
//     </div>
//   );
// };

// export default App;

//Example 4 

import FormValidation from "./components/FormValidation";

const App = () => {
  const handleFormSubmit = (data) => {
    console.log("Dữ liệu đã gửi:", data);
  };

  return (
    <div className="App">
      <h1 className="text-center mt-3">Ứng Dụng React - Ví dụ 4</h1>
      <FormValidation onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;





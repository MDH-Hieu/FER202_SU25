function CourseList() {
  const course = ["React", "ReactNative", "NodeJs"];

  return (
    <div className="custom-margin">
      <h2>Course names </h2>
      <ul>
        {course.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
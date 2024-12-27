import CourseCard from "./components/CourseCard";

export default function Courses() {
  const coursesData = [
    { id: 1, name: "Course 1", description: "Course description" },
    { id: 2, name: "Course 2", description: "Course description" },
    { id: 3, name: "Course 3", description: "Course description" },
    { id: 4, name: "Course 4", description: "Course description" },
    { id: 5, name: "Course 5", description: "Course description" },
  ];

  return (
    <>
      <h1>Courses</h1>

      <div className="container">
        <div className="row">
          {coursesData.map((course, i) => (
            <CourseCard key={i} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}

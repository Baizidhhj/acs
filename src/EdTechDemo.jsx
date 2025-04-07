import React, { useState } from "react";

// [Code omitted for brevity: user-provided full component code goes here...]

export default function EdTechDemo() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleBack = () => {
    if (selectedClass) {
      setSelectedClass(null);
    } else if (selectedChapter) {
      setSelectedChapter(null);
    } else if (selectedSubject) {
      setSelectedSubject(null);
    } else if (selectedCourse) {
      setSelectedCourse(null);
    }
  };

  return (
    <div className="p-4">
      {(selectedCourse || selectedSubject || selectedChapter || selectedClass) && (
        <button
          onClick={handleBack}
          className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ⬅ Back
        </button>
      )}

      {!selectedCourse ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="border rounded-lg p-2 cursor-pointer shadow max-w-md mx-auto"
              onClick={() => setSelectedCourse(course)}
            >
              <img src={course.courseImage} alt={course.courseTitle} className="w-full h-48 object-cover rounded" />
              <h2 className="text-center mt-2 font-bold">{course.courseTitle}</h2>
            </div>
          ))}
        </div>
      ) : !selectedSubject ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Subjects in {selectedCourse.courseTitle}</h2>
          {selectedCourse.subjects.map((subject, index) => (
            <div
              key={index}
              className="p-2 border mb-2 rounded cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedSubject(subject)}
            >
              {subject.subjectName}
            </div>
          ))}
        </div>
      ) : !selectedChapter ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Chapters in {selectedSubject.subjectName}</h2>
          {selectedSubject.chapters.map((chapter, index) => (
            <div
              key={index}
              className="p-2 border mb-2 rounded cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedChapter(chapter)}
            >
              {chapter.chapterName}
            </div>
          ))}
        </div>
      ) : !selectedClass ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Classes in {selectedChapter.chapterName}</h2>
          {selectedChapter.classes.map((cls, index) => (
            <div
              key={index}
              className="p-2 border mb-2 rounded cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedClass(cls)}
            >
              {cls.classTitle}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">{selectedClass.classTitle}</h2>

          {selectedClass.youtubeUrl && (
            <div className="aspect-video w-full max-w-3xl mx-auto mb-4">
              <iframe
                width="100%"
                height="100%"
                src={selectedClass.youtubeUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {selectedClass.slideUrl && (
            <div className="aspect-video w-full max-w-3xl mx-auto mb-4">
              <iframe
                src={selectedClass.slideUrl}
                width="100%"
                height="100%"
                allow="autoplay"
                title="Class Slide"
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

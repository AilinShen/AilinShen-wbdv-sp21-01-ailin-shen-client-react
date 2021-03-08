import CourseService from "./course-service";

function LessonService() {

    this.createLesson = createLesson;
    this.findLessonsForModule= findLessonsForModule;
    this.findLesson = findLesson;
    this.updateLesson = updateLesson;
    this.deleteLesson = deleteLesson;
    this.baseUrl = 'https://wbdv-generic-server.herokuapp.com/api/001302872'
    const self = this;

    function findLessonsForModule(moduleId) {
        return fetch(`${self.baseUrl}/modules/${moduleId}/lessons`)
            .then(function (res) {
                return res.json()
            })
    }

    function createLesson(moduleId, lesson){
        return fetch(`${self.baseUrl}/modules/${moduleId}/lessons`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(lesson)
        }).then(function (res){
            return res.json()
        })
    }

    function findLesson(lessonId){
        return fetch(`${self.baseUrl}/lessons/${lessonId}`)
            .then(function (res){
                return res.json()
            })
    }

    function updateLesson(lessonId, lesson){
        return fetch(`${self.baseUrl}/lessons/${lessonId}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(lesson)
        }).then(function (res){
            return res.json()
        })
    }

    function deleteLesson(lessonId) {
        return fetch(`${self.baseUrl}/lessons/${lessonId}`, {
            method: 'DELETE'
        }).then(function (res) {
            return res.json()
        })
    }
}

export default LessonService
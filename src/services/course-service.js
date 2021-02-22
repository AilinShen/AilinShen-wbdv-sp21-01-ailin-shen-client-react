function CourseService() {
    this.createCourse = createCourse;
    this.findAllCourses = findAllCourses;
    this.findCourseById = findCourseById;
    this.deleteCourse = deleteCourse;
    this.updateUser = updateCourse;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001302872/courses';
    const self = this;


    function createCourse(course) {
        return fetch(self.url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        }).then(function (res) {
            return res.json()
        })
    }

    function findAllCourses() {
        return fetch(self.url)
            .then(function (res) {
                return res.json()
            })
    }

    function findCourseById(id) {
        return fetch(`${self.url}/${id}`).
        then(function (res) {
            return res.json()
        })
    }

    function updateCourse(id, course) {
        return fetch(`${self.url}/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        }).then(function (res) {
            return res.json()
        })
    }

    function deleteCourse(id) {
        return fetch(`${self.url}/${id}`,
            {method: 'DELETE'})
            .then(function (res) {
                return res.json()
            })
    }
}

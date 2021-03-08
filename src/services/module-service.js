function ModuleService() {
    this.createModule = createModule;
    this.findModulesForCourse = findModulesForCourse;
    this.findModule = findModule;
    this.updateModule = updateModule;
    this.deleteModule= deleteModule;
    this.baseUrl = 'https://wbdv-generic-server.herokuapp.com/api/001302872'
    const self = this;

    function findModulesForCourse(courseId) {
        return fetch(`${self.baseUrl}/courses/${courseId}/modules`)
            .then(function (res) {
            return res.json()
        })
    }

    function createModule(courseId, module) {
        return fetch(`${self.baseUrl}/courses/${courseId}/modules`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(module)
        }).then(function (res) {
            return res.json()
        })
    }

    function findModule(moduleId) {
        return fetch(`${self.baseUrl}/modules/${moduleId}`)
            .then(function (res){
            return res.json()
        })
    }

    function updateModule(moduleId, module) {
        return fetch(`${self.baseUrl}/modules/${moduleId}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(module)
        }).then(function (res) {
            return res.json()
        })
    }

    function deleteModule(moduleId) {
        return fetch(`${self.baseUrl}/modules/${moduleId}`, {
            method: 'DELETE'
        }).then(function (res) {
            return res.json()
        })
    }

}

export default ModuleService
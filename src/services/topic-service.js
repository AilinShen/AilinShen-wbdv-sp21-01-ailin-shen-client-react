function TopicService() {

    this.findTopicsForLesson = findTopicsForLesson;
    this.createTopic = createTopic;
    this.findTopic = findTopic;
    this.updateTopic = updateTopic;
    this.deleteTopic = deleteTopic;
    this.baseUrl = 'https://wbdv-generic-server.herokuapp.com/api/001302872'
    const self = this;


    function createTopic(lessonId, topic) {
        return fetch(`${self.baseUrl}/lessons/${lessonId}/topics`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(topic)
        }).then(function (res){
            return res.json()
        })
    }

    function findTopicsForLesson(lessonId) {
        return fetch(`${self.baseUrl}/lessons/${lessonId}/topics`)
            .then(function (res){
                return res.json()
            })
    }
    function findTopic(topicId){
        return fetch(`${self.baseUrl}/topics/${topicId}`)
            .then(function (res){
                return res.json()
            })
    }
    function updateTopic(topicId, topic){
        return fetch(`${self.baseUrl}/topics/${topicId}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(topic)
        }).then(function (res) {
            return res.json()
        })
    }
    function deleteTopic(topicId){
        return fetch(`${self.baseUrl}/topics/${topicId}`, {
            method: 'DELETE'
        }).then(function (res) {
            return res.json()
        })
    }
}

export default TopicService
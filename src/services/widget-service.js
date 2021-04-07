function WidgetService() {

    this.createWidget = createWidget;
    this.findWidgetsForTopic = findWidgetsForTopic;
    this.findAllWidgets = findAllWidgets;
    this.findWidgetById = findWidgetById;
    this.updateWidget = updateWidget;
    this.deleteWidget = deleteWidget;

    this.baseUrl = 'https://wbdv-sp21-01-ailin-shen-server.herokuapp.com/api'
    // this.baseUrl = 'http://localhost:8080/api'
    const self = this;

    function createWidget(topicId, widget){
        return fetch(`${self.baseUrl}/topics/${topicId}/widgets`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(widget)
        }).then(function (res){
            return res.json()
        })
    }

    function findWidgetsForTopic(topicId){
        return fetch(`${self.baseUrl}/topics/${topicId}/widgets`)
            .then(function (res){
                return res.json()
            })
    }

    function findAllWidgets() {
        return fetch(`${self.baseUrl}/widgets`)
            .then(function (res){
                return res.json()
            })
    }

    function findWidgetById(widgetId) {
        return fetch(`${self.baseUrl}/widgets/${widgetId}`)
            .then(function (res) {
                return res.json()
            })
    }

    function updateWidget(widgetId, widget){
        return fetch(`${self.baseUrl}/widgets/${widgetId}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(widget)
        }).then(function (res){
            return res.json()
        })
    }

    function deleteWidget(widgetId){
        return fetch(`${self.baseUrl}/widgets/${widgetId}`, {
            method: 'DELETE',
        }).then(function (res){
            return res.json()
        })
    }

}
export default WidgetService
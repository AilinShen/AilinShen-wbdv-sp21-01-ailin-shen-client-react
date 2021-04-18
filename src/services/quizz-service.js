function QuizzService() {

    this.findAllQuizzes = findAllQuizzes;
    this.findQuizById = findQuizById;
    this.submitQuiz = submitQuiz;
    this.url = 'https://wbdv-sp21-01-ailin-shen-mongo.herokuapp.com/api'
    const self = this;


    function findAllQuizzes(){
        return fetch(`${self.url}/quizzes`)
            .then(res=>{
                return res.json()
            })
    }

    function findQuizById(quizId){
        return fetch(`${self.url}/quizzes/${quizId}`)
            .then(res=>{
                return res.json()
            })
    }

    function submitQuiz(quizId, questions){
        return fetch(`${self.url}/quizzes/${quizId}/attempts`, {
            method: 'POST',
            body: JSON.stringify(questions),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

    }
}

export default QuizzService

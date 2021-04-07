function QuizzService() {

    this.findAllQuizzes = findAllQuizzes;
    this.findQuizById = findQuizById;
    this.url = 'http://localhost:4000/api'
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
}

export default QuizzService

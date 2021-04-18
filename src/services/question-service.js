function QuestionService(){

    this.findQuestionsForQuiz = findQuestionsForQuiz;
    this.url = 'https://wbdv-sp21-01-ailin-shen-mongo.herokuapp.com/api'
    const self = this;


    function findQuestionsForQuiz(quizId){
        return fetch(`${self.url}/quizzes/${quizId}/questions`)
            .then((res)=>{
                return res.json()
            })
    }


}

export default QuestionService
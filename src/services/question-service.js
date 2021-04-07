function QuestionService(){

    this.findQuestionsForQuiz = findQuestionsForQuiz;
    this.url = 'http://localhost:4000/api'
    const self = this;


    function findQuestionsForQuiz(quizId){
        return fetch(`${self.url}/quizzes/${quizId}/questions`)
            .then((res)=>{
                return res.json()
            })
    }


}

export default QuestionService
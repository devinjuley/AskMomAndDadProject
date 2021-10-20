const buttons = document.querySelectorAll('.delete-btn')

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        const questionId = e.target.id.split('-')[2]
        const res = await fetch(`/questions/${questionId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if (data.message === "Success") {
            const container = document.querySelector(`#question-container-${questionId}`)
            container.remove()
        }
    })

}


const ansButtons = document.querySelectorAll('.delete-ans-btn')
// const answerId = document.getElementById(`answer-delete-${answer.id}`)
for (let i = 0; i < ansButtons.length; i++) {
    const ansButton = ansButtons[i];
    ansButton.addEventListener('click', async (e) => {
        e.preventDefault();

        const answerId = e.target.id.split('-')[2]
        const res = await fetch(`/answers/${answerId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if (data.message === "Success") {
            const container = document.querySelector(`#answer-container-${answerId}`)
            container.remove()
        }
    })

}

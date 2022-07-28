Vue.component('errortrue', {
    props: ['error'],
    template: `
        <div v-if="error">
            <h1>Ошибка! Нет доступа к API</h1>
        </div>
        `
})
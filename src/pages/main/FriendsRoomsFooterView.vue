<template>
    <footer class="border-top" style="
        background-color:whitesmoke;
        padding:1rem;
    ">
        <div class="row">
            <div class="col-6 text-center text-black" @click="clickPerson">
                <img id="personSVG" width="26" height="26" src="/icons/person-fill.svg">
            </div>
            <div class="col-6 text-center text-black" @click="clickChat">
                <img id="chatSVG" width="26" height="26" src="/icons/chat.svg" >
            </div>
        </div>
    </footer>
</template>

<script>
export default{

    methods: {
        clickPerson() {
            this.$emit('childs-event', 'person')
            const personSVG = document.getElementById('personSVG');
            if(personSVG.src.includes('person.svg')){
                personSVG.src = '/icons/person-fill.svg';
                document.getElementById('chatSVG').src = '/icons/chat.svg';
            }
        },
        clickChat(){
            this.$emit('childs-event', 'chat')
            const chatSVG = document.getElementById('chatSVG');
            
            if(chatSVG.src.includes('chat.svg')){
                chatSVG.src = '/icons/chat-fill.svg';
                document.getElementById('personSVG').src = '/icons/person.svg';
            }
        }
    }
};
</script>
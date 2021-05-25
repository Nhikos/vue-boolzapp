var app = new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },     
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Massimo',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        activeIndex: 0,
        newMessage: ""
    },

    methods: {
        getContactImage: function (contactIndex) {
            // versione ES5
            // const avatar = this.contacts[contactIndex].avatar;
            // /versione ES5

            // destrutturazione
            const { avatar } = this.contacts[contactIndex]
            // /destrutturazione

            return `img/avatar${avatar}.jpg`;
        },

        getLastMessageDate: function (contactIndex) {
            const lastMessageIndex = this.contacts[contactIndex].messages.length - 1;
            return this.contacts[contactIndex].messages[lastMessageIndex].date
        },

        getLastMessageText: function (contactIndex) {
            const lastMessageIndex = this.contacts[contactIndex].messages.length - 1;
            return this.contacts[contactIndex].messages[lastMessageIndex].text.substr(0, 39) + "..."
        },

        setActive: function(newIndex) {
            this.activeIndex = newIndex;  
        },

        addNewMessage: function() {
            
            this.contacts[this.activeIndex].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: this.newMessage,
                status: "sent",
            });  
            
            setTimeout(() => {
                this.contacts[this.activeIndex].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: "ok",
                    status: "received",
                });  
            }, 1000);

            this.newMessage = "";
        },

        contactsSearch: function(event) {
            const searchText = event.target.value;
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(searchText.toLowerCase())) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        },
    }
});

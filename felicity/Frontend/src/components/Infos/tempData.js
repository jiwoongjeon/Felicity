export const CONVERSATION_DATA = [
    {
        patient: "Mark Willson",
        age_sex: "28/Male",
        disease: "COVID19",

        symptoms: [
            {id: "High Fever"},
            {id: "Cough"}
        ],

        date: "2021.10.27 (today)",

        history: [
            {
                disease: "COVID19",
                past_symptoms: [
                    {id: "High Fever"},
                    {id: "Cough"}
                ],
                date: "2020.12.25"
            },

            {
                disease: "COVID19",
                past_symptoms: [
                    {id:"High Fever"},
                    {id:"Cough"}
                ],
                date: "2020.10.16"
            }
        ],

        doctor: "Dr. Jiwoong Jeon",
        profession: "Urology",
        education: [
            {id: "Ph.D in Computer Science, MIT, 2028<"},
            {id: "B.S. in Computer Science, Pennsylvania State University, 2022"}
        ],
        phone: "+1 123-456-7890",
        email: "aaaaaaaa@gmail.com"
    }
]
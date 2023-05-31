import {reactive} from "vue";

export const store = reactive({
    testimonialsFeedbacks: [
        {
            title: 'High level of efficiency and scientific teaching methods',
            body: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
            userName: 'Mina Hollace',
            userRole: '/Freelancer',
            userImage: 'src/assets/img/artist-testimonial-avatar-01.jpg'
        },
        {
            title: 'Its a choice of quality for people with special needs ',
            body: 'I\'m a very strict person so I require everything to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys just got me. ',
            userName: 'Florence Themes',
            userRole: '/Multimedia Admin',
            userImage: 'src/assets/img/artist-testimonial-avatar-02.jpg'
        },
        {
            title: 'Professional team of specialists and passionate mentors at reach ',
            body: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students. \n' +
                'Madley Pondor ',
            userName: 'Madley Pondor',
            userRole: '/IT Specialist',
            userImage: 'src/assets/img/artist-testimonial-avatar-03.jpg'
        },
        {
            title: 'Professional team of specialists and passionate mentors at reach ',
            body: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students. \n' +
                'Madley Pondor ',
            userName: 'Madley Pondor',
            userRole: '/IT Specialist',
            userImage: 'src/assets/img/artist-testimonial-avatar-04.jpg'
        }
    ],

    // COURSES

    latestCourses: [
        {
            img: 'src/assets/img/artist-course-08-480x480.jpg',
            price: '18.00',
            name: 'The Acrylic Painting Academy',
            lessons: 4,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-07-480x480.jpg',
            price: '21.00',
            name: 'The Acrylic Painting Academy',
            lessons: 9,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-06-480x480.jpg',
            price: '19.00',
            name: 'The Acrylic Painting Academy',
            lessons: 12,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-05-480x480.jpg',
            price: '35.00',
            name: 'The Acrylic Painting Academy',
            lessons: 7,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-04-480x480.jpg',
            price: '19.00',
            name: 'The Acrylic Painting Academy',
            lessons: 4,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-03-480x480.jpg',
            price: '19.00',
            name: 'The Acrylic Painting Academy',
            lessons: 4,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-02-480x480.jpg',
            price: '25.00',
            name: 'The Acrylic Painting Academy',
            lessons: 4,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-01-480x480.jpg',
            price: '22.00',
            name: 'The Acrylic Painting Academy',
            lessons: 6,
            students: 50
        },
    ]
});
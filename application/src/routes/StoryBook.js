import React from 'react';

const StoryBook = React.lazy(() => import('../modules/StoryBook'));
const Home = React.lazy(() => import('../modules/StoryBook/Containers/Home'));

export default [
    {
        state: 'storybook',
        exact: true,
        path: '/story-book',
        name: 'Storybook',
        component: StoryBook,
        resources: [
            {
                state: 'storybook.home',
                exact: true,
                path: '/story-book/home',
                name: 'Home ',
                component: Home,
            }
        ]

    }
];
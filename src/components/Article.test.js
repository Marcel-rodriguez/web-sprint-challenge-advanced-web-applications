import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import {render, screen} from '@testing-library/react'

test('renders component without errors', ()=> {
    render(<Article article={[]}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={[
        {author: 'Test',
        headline: 'Headline',
        summary: 'test',
        id: 'test',
        body: 'test',
        createdOn: []
    }
    ]} />)

    const headlines = screen.queryAllByText(/Headline/i)
    expect(headlines).toBeTruthy()
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={[
        {author: '',
        headline: 'test',
        summary: 'test',
        id: 'test',
        body: 'test',
        createdOn: []
    }
    ]} />)

    const associatesPress = screen.queryByText(/Associated Press/i)
    expect(associatesPress).toBeInTheDocument()
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete = jest.fn()
    render(<Article handleDelete={handleDelete} article={[
    {author: '',
    headline: 'test',
    summary: 'test',
    id: 'test',
    body: 'test',
    createdOn: []
}]} />)

    const delButton = screen.getByText(/Delete/i)
    userEvent.click(delButton)

    expect(handleDelete).toHaveBeenCalled()
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.
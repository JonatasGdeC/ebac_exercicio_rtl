import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve inserir dois comentários', () => {
        render(<PostComment/>)
        const comentario = screen.getByPlaceholderText('Comentar')
        const botaoAdd = screen.getByText('Comentar')

        fireEvent.change(comentario, {target: {value:'Legal!'}})
        fireEvent.click(botaoAdd)
        expect(screen.getByText('Legal!')).toBeInTheDocument()

        fireEvent.change(comentario, {target: {value:'Prefiro a Marvel'}})
        fireEvent.click(botaoAdd)
        expect(screen.getByText('Prefiro a Marvel')).toBeInTheDocument()
    })
})
import React from "react";
import { shallow } from "enzyme";
import MovieItem from "./MovieItem";

const movie = {
    id: '267',
    poster_path: 'someURL',
    title: 'Joker',
    vote_average: '7',
};


describe("<MovieItem />", () => {
    it("renders without crashing", () => {
        shallow(<MovieItem key={movie.id} movie={movie} />);
    });

    it('renders a `.movie` div', () => {
        const wrapper = shallow(<MovieItem key={movie.id} movie={movie} />);
        expect(wrapper.find('.movie').length).toBe(1);
    });

    it('renders an img with correct className and poster path', () => {
        const wrapper = shallow(<MovieItem key={movie.id} movie={movie} />);
        expect(wrapper.find('img').prop("src")).toBe('https://image.tmdb.org/t/p/w300/someURL');
        expect(wrapper.find('img').prop("className")).toBe('movie-image');
    });

    it('renders an div with correct movie title', () => {
        const wrapper = shallow(<MovieItem key={movie.id} movie={movie} />);
        expect(wrapper.find('.movie-title').text()).toBe('Joker');
    });
});

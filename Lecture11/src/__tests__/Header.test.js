import { render } from '@testing-library/react';
import HeaderComponent from "../components/HeaderComponent";
import { Provider } from 'react-redux';
import store from '../store/reduxStore.js'
import { StaticRouter } from 'react-router-dom/server'
import { SocialMediaIcon as icon } from "../utils/socialMediaIcon";

const url = "https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"

test("Testing HeaderComponent", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <HeaderComponent />
            </Provider>
        </StaticRouter>
    );

    const logo = header.findAllByTestId("logo");
    expect(logo.src).toBe(icon.logo.url);


})
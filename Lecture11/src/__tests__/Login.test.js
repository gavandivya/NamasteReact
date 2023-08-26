import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/reduxStore.js'
import { StaticRouter } from 'react-router-dom/server'
import LoginComponent from '../components/LoginComponent.js';
import '@testing-library/jest-dom/extend-expect';


test("Password should have label", () => {
    const login = render(
        <StaticRouter>
            <Provider store={store}>
                <LoginComponent />
            </Provider>
        </StaticRouter>
    );

    const password = screen.getByLabelText("Password");
    expect(password.getAttribute("name")).toBe("password");
})

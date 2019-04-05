import styled from 'styled-components';

export const HeaderContainer = styled.div`
    font-family: 'Fira Sans', sans-serif;

    .logo {
        width: 200px;
        height: 40px;
    }

    .bg-light {
        background-color: #fff!important;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .navbar-expand-lg .navbar-nav .nav-link {
        font-size: 16px;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .nav-link {
        text-decoration: none;
        background-image: linear-gradient(#122541, #122541);
        background-size: 0 4px;
        background-repeat: no-repeat;
        background-position: center bottom;
        transition: all .2s ease-out;
    }

    .nav-link:hover {
        background-size: calc(100% - 2rem) 4px;
    }

    .vertical-line {
        border-left: 1px solid grey;
    }

    .btn {
        transition: 0.5s;
        background-color: #07bc4c;
        font-size: 16px;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .btn:hover {
        transition: 0.5s;
        background-color: #08d556;
    }

    @media screen and (max-width: 767px) {
        .bg-light {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }

        .vertical-line {
            border-left: none;
        }

        .navbar-expand-md .navbar-nav .nav-link {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
        .nav-link:hover {
            background-size: 0 4px, auto;
        }
    }
`;
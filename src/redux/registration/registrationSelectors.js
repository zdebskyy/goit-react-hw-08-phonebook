const isAuthenticated = (state) => state.register.token;

const userName = (state) => state.register.user.name;

const regastrationSelectors = { isAuthenticated, userName };

export default regastrationSelectors;

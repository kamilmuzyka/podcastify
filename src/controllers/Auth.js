class Auth {
    static init(redirect) {

        function accessDataAvailable() {
            const access = JSON.parse(localStorage.getItem('access'));
            if (access) {
                const expires = access.expires;
                const now = (new Date()).getTime();
                return (now < expires) ? true : false;
            }
            return false;
        }

        function hashAvailable() {
            const hash = window.location.hash;
            return hash ? true : false;
        }

        if (accessDataAvailable()) {
            redirect('/shows');
            return;
        }

        if (hashAvailable()) {
            const hash = window.location.hash;
            const replaced = hash.replace('#', '?');
            const params = new URLSearchParams(replaced);
            const token = params.get('access_token');
            const expiresAddOn = params.get('expires_in') * 1000;
            const expiresBase = + (new Date()).getTime();
            const expires = expiresBase + expiresAddOn;
            localStorage.setItem('access', JSON.stringify({
                token,
                expires
            }));
            redirect('/shows');
            return;
        }

        redirect('/');
    }
}

export default Auth;
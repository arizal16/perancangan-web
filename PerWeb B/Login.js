function validasi() {

    if (document.form.username.value == "" ) {
        alert("Username Tidak Boleh Kosong!");
        document.formlogin.username.focus();
        return false;
    }
    if (document.form.password.value == "" ) {
        alert("Password Tidak Boleh Kosong!");
        document.formlogin.password.focus();
        return false;
    }
    return alert('Login Berhasil!');


}
global.window = {};
global.navigator = {appName: 'nodejs'};
const JSEncrypt = require('jsencrypt');

function template() {
  const jsencrypt = new JSEncrypt();
  const private_key  = '-----BEGIN RSA PRIVATE KEY-----MIICXQIBAAKBgQDZ2FGr0+8hT+lZu4EuJ5CAVnk4cfZ+spT05rm71HAoD7bi7f0t4mqgtYZj57rJI5oQ5G1zuSDgsqt3bJRXk4d4lIaCFh+rEwBtjZJMxylyOIgeT/dj8YnzsCu4Qx1wGBhurNfzTy3aKXIusgB8FU7SwgguQcQelfARX0xQk2Y9QQIDAQABAoGAP6r7Y67TSvciCjnE7Yper0OWtiqIkkr7QgBU9FKIXQ0KtJQ91LVB2Kp1FqnZa4PeOWWpn5LRyxotBwBS8q2Jf+g/UrOpeYAT76Qfk1xOD/ga9tfaAF0ZClpyCcm1v7CvMGKUdJxjM6Nfw6Q/A7xkxMGlmGLfeftCSjfGmuUyMMkCQQDzOWEcyvPgKy1dQ/Eb2O4kx6sK1GIFi7rwTshomOKiJpvuIQj3ipuD4CvUqQxT36fG+dq+wVvUinFhkFOxK1/XAkEA5Umq+K/g54pGXNmUGW0Ph24G3bsn5Djt/ZQ57YC2HMJcptwHR8nzT9pbjpWIP7QQdVFJRIQnF7vI9+w6UEQIpwJBAMt77Mg271NTLC/EALqogYwZ0/pKdvtmzG3xq27+wVShcoEF+EeJGdR5vpG7IEonamlobV57zEUD0hmqsqodvJ8CQBdYnej+d4b75Fg160d/fFJM2LQhB1nMlib4vcE6FtDs1WRECRW9MWITGLl27k2WNwrLAQvR7O0UuMzNp85ebwcCQQC0OJTnKGATno9SeDbs5iU/zIHK/qHPPV5OmQ7/FRqAXWfSXwfukHyhd7U6h1kEHTnK4WTJi/6uBkvTc2GOGYym-----END RSA PRIVATE KEY-----';
  const public_key = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDZ2FGr0+8hT+lZu4EuJ5CAVnk4cfZ+spT05rm71HAoD7bi7f0t4mqgtYZj57rJI5oQ5G1zuSDgsqt3bJRXk4d4lIaCFh+rEwBtjZJMxylyOIgeT/dj8YnzsCu4Qx1wGBhurNfzTy3aKXIusgB8FU7SwgguQcQelfARX0xQk2Y9QQIDAQAB-----END PUBLIC KEY-----'
  jsencrypt.setPublicKey(public_key);
  jsencrypt.setPrivateKey(private_key);
  const content = 'zhangsan';
  console.log('content', content);
  const result_encrypt = jsencrypt.encrypt(content);
  console.log('result_encrypt', result_encrypt);
  const result_decrypt = jsencrypt.decrypt(result_encrypt);
  console.log('result_decrypt', result_decrypt);
}

function container() {
  const jsencrypt = new JSEncrypt();
  const public_key = '-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2ipss+zvczYidEK5fDLy96VzO+vroxiarLCuPnR3kUOk0DCrKHe+6mdW9GPlcl3CGQQ50u4y5dl+S0SI9tC7eBZ4nYhxPWhX6mG/ybq4kfyevO53D3sR4HVIPb4rSR+AATDtMlKrLcZvvmxkNO4NwW4CI/lGRtVVKmKGA8/VbOq6mL7wA56xEE6goimD00cxbd9lfqoM9ViGpK18Rb+gTHOEiz3g3jjARXMqXAXqh1z29ylMsl0cNvPldJGQHXQ2buzBQmfa070jyCQ6m1N4imTKKOd7T1hnTT7Cz8mYc5Yjp5TWYbDMe1nFqadf4dzeMZf2wQL9iVXJB3HIgdXlvQIDAQAB-----END PUBLIC KEY-----';
  jsencrypt.setPublicKey(public_key);
  const content = 'zhangsan';
  const result_encrypt = jsencrypt.encrypt(content);
  console.log('result_encrypt', result_encrypt);
}

// template();
// container();
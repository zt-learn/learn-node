/**
 * ��js�У�function������
 *
 */
var klass = require('./klass');

/*JS�к�����ʹ�÷�ʽ1,���ǲ���ʹ��ԭ�ͷ���*/
klass();

/*JS�к�����ʹ�÷�ʽ2:��������ʹ��*/
var a = new klass("sb", '123');
a.test();

console.log(a.name);
console.log(a.age);
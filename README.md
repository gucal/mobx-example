# React-Native-MobX-Exp

@observable
Değeri takip edilebilir yapıda olduğunu belirtir. Burada tanımlanan veri diğer componentte görüntülenebilir.

@observer
Observable tanımlarını başka class üzerinde takip edilebilir bir yapıda olduğunu belirtir. Kullanılmazsa değişiklikler yansımaz.

@action
Tüm işlem bittikten sonra mobx bilgilendirilir. Aksi taktirde her işlem için yeniden mobx bilgilendirilir.

configure
configure içerisine enforceActions: “observed” yapılırsa action kullanımı zorunlu hale gelir.

@computed
Verileri bir fonksiyondan return etmek için kullanılır. a

autorun
Uygulama ilk çalıştığında çalışan fonksiyondur. Store’da herhangi state değişimi olması durumunda yeniden çalışır

reaction
Store içerisindeki değişkenlerin belli bir kural doğrultusunda yapacağı işlemleri karmaşık yapılar kullanmadan yapılmasını sağlar.

when
reaction’un yaptığı işlemi sadece 1 kere yapmasını sağlar.

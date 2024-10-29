# Nodejs-PDF-Marge

Node.js kullanarak PDF dosyalarını birleştirmek için basit ve kullanışlı bir araç. Bu proje, birden fazla PDF dosyasını birleştirmenizi sağlayarak PDF işlemlerinizi kolaylaştırır.

## Özellikler

- **Birden Fazla PDF Birleştirme**: Belirli bir sırayla birden fazla PDF dosyasını tek bir dosyada birleştirir.
- **Kolay Kullanım**: Sade ve anlaşılır bir arayüzle hızlı işlem yapabilirsiniz.
- **PDF İşlemlerini Basitleştirme**: PDF'leri birleştirerek dosya düzenini korur ve işlemleri hızlandırır.

## Gereksinimler

- **Node.js** (v12 veya üzeri)
- `npm` paket yöneticisi

## Kurulum

Projeyi klonladıktan sonra aşağıdaki adımları takip ederek gerekli bağımlılıkları yükleyin.

1. **Projeyi Klonlayın**

    ```bash
    git clone https://github.com/misikbal/Nodejs-PDF-Marge.git
    cd Nodejs-PDF-Marge
    ```

2. **Bağımlılıkları Yükleyin**

    ```bash
    npm install
    ```

## Kullanım

PDF dosyalarını birleştirmek için aşağıdaki komutu kullanabilirsiniz:

```bash
node merge.js [PDF1] [PDF2] ... [OUTPUT]
```

[PDF1] [PDF2] ...: Birleştirmek istediğiniz PDF dosyalarının yollarını girin.
[OUTPUT]: Çıkış dosyasının adını ve konumunu belirtin.


Örnek Kullanım
```bash
node merge.js document1.pdf document2.pdf merged_output.pdf
```
Bu komut, document1.pdf ve document2.pdf dosyalarını birleştirir ve merged_output.pdf adıyla kaydeder.


import rsa

chavepub, chavepriv = rsa.newkeys(512)
mensagem = input("Digite a sua mensagem: ")
mensagemcripto = rsa.encrypt(mensagem.encode(), chavepub)
print ("Texto original: ",mensagem)
print("\nTexto criptografado: ",mensagemcripto)
mensagemdescripto = rsa.decrypt(mensagemcripto, chavepriv).decode()
print("\nTexto descriptografado: ",mensagemdescripto)
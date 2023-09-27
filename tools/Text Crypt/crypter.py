
def encrypt(str):
    encrypted_str = ""
    for i in str:
        if ord(i) == 65 or ord(i) == 63:
            encrypted_str += chr(ord(i))
        elif ord(i) < 64:
            encrypted_str += chr(ord(i) + 2)
        else:
            encrypted_str += chr(ord(i) - 2)
    return encrypted_str

def decrypt(str):
    decrypted_str = ""
    for i in str:
        if ord(i) == 65 or ord(i) == 63 or ord(i) == 64:
            decrypted_str += chr(ord(i))
        elif ord(i) < 64:
            decrypted_str += chr(ord(i) - 2)
        else:
            decrypted_str += chr(ord(i) + 2)
    return decrypted_str


print("welcome")
op = int(input("choose what you want \n1:decrypt \n2:encrypt\nchoose : "))


if op == 2:
    str = input("enter your message : ")
    print(encrypt(str))
elif op == 1:
    str = input("enter your encrypted message : ")
    print(decrypt(str))


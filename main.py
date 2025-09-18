text = "abdul."
text2 = -1

for i in range(len(text)):
    if text[i] == ".":
        text2 = i
        break

if text2 != -1:
    print(f'"." simvolu ilk defe {text2} indeksinde yerlesir')
else:
    print('metnde "." simvolu yoxdur')
# Template

🌐 [Link til Side][1] 🌐  
📂 [Link til GitHub][2] 📂

## Note

### Polski

1. Dodaj nową kolumnę dla osoby. Musi być możliwe określenie podczas tworzenia nowego zadania i musi być możliwe do edycji.
1. Dodaj nową kolumnę dla terminu. Użyj znacznika wejściowego `type="date"`. Konwersja formatu wyświetlania: `new Date("2019-02-13").toLocaleDateString()`. Aby utworzyć inną datę we właściwym formacie `<input type="date", bruk myDate.toISOString().substr(0,10)`
1. Dodaj nową kolumnę „data wykonania”, która zostanie wypełniona automatycznie po naciśnięciu pola wyboru, aby to zrobić.

### Norsk

1. Legg til en ny kolonne for person. Må kunne angis når man lager ny oppgave og må kunne redigeres
1. Legg til en ny kolonne for frist. Bruk input-tag med `type="date"`. Konvertering til visningsformat: `new Date("2019-02-13").toLocaleDateString()`. For å lage en dato på riktig format til `<input type="date", bruk myDate.toISOString().substr(0,10)`
1. Legg til en ny kolonne for "gjort dato" som fylles ut automatisk når man trykker på checkboxen for at det er gjort.

[1]: https://krzysztofga.github.io/GetAcademy/Module-2/oppgaver/2-objekter-med-egne-felt
[2]: https://github.com/KrzysztofGA/GetAcademy/tree/master/GetAcademy/Module-2/oppgaver/2-objekter-med-egne-felt

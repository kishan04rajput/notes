#include <bits/stdc++.h> // Includes all headers
using namespace std;

// Class representing a Human
class Human
{
   // Private method to set gender, not accessible from outside the class
   void gender(string S)
   {
      cout << "gender called" << endl
           << S << endl;
   }

public:
   string S; // Public string to hold the gender or any other value

   // Default constructor
   Human()
   {
      cout << "Human Constructor Called" << endl;
   }

   // Parameterized constructor to initialize with a string
   Human(string S)
   {
      cout << "Human Constructor Called with string s" << endl
           << S << endl;
   }

   // Destructor to free resources when the object is destroyed
   ~Human()
   {
      cout << "Destructor Called!" << endl
           << S << endl;
   }

   // Public method to set the sex and assign it to the S variable
   void sex(string S)
   {
      this->S = S; // Using 'this' pointer to differentiate between member and parameter
      cout << "sex called\n"
           << S << endl;
   }

   // Public method to set gender using the private method
   void setGender(string S)
   {
      cout << "setGenderCalled" << endl;
      gender(S); // Calls the private gender method
   }
};

int main()
{
   // Clear the console screen
   system("clear"); // For Linux/Unix

   // Print Hello World
   printf("Hello World!!!!\n");

   // Create a Human object 'male' using parameterized constructor
   Human male("HUMAN");

   // Call sex method on 'male' object
   male.sex("MALE");

   // Call setGender method on 'male' object
   male.setGender("MALE GENDER");

   // Create a Human object 'female' using the default constructor
   Human female;

   // Call sex method on 'female' object
   female.sex("FEMALE");

   // Create a Human object dynamically (on heap) using the default constructor
   Human *baby = new Human; // 'new' returns a pointer to the object

   // Call sex method on 'baby' object (accessing through pointer)
   baby->sex("BABY");

   // Delete the dynamically allocated object to free memory (calls destructor)
   delete baby;

   return 0; // Return 0 to indicate successful program execution
}

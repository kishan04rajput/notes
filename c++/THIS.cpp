// this is a special pointer to current object
// Use -> when you have a pointer to an object (like this).
// Use . when you're directly dealing with the object itself.

#include <bits/stdc++.h> // Includes all standard C++ libraries (not recommended for large projects)
using namespace std;     // Allows the use of standard library names (like cout) without prefixing them with std::

// Class representing a Human
class Human
{
    // Private member variables for storing age and sex
    int age;
    string sex;

public:
    // Default constructor (no parameters)
    Human() {}

    // Parameterized constructor to initialize age and sex
    Human(int age, string sex) : age(age), sex(sex) {}

    // Setter method for age
    void setAge(int age)
    {
        this->age = age; // Using 'this->' to refer to the current object's age variable
    }

    // Getter method to display age
    void getAge()
    {
        cout << age << endl; // Print the age of the human
    }

    // Setter method for sex
    void setSex(string sex)
    {
        (*this).sex = sex; // You can use 'this->sex' or '(*this).sex' to refer to the member variable
    }

    // Getter method to display sex
    void getSex()
    {
        cout << sex << endl; // Print the sex of the human
    }

    // Method to simulate walking
    void walk(string Name)
    {
        cout << Name << " walking" << endl;
    }

    // Method to simulate sitting
    void sit(string Name)
    {
        cout << Name << " sitting" << endl;
    }

    // Method to simulate talking
    void talk(string Name)
    {
        cout << Name << " talking" << endl;
    }

    // Method to simulate running
    void run(string Name)
    {
        cout << Name << " running" << endl;
    }
};

int main()
{
    system("clear");
    cout << "Hello World\n";

    // Creating an object 'Kishan' of class Human using the default constructor
    Human Kishan;

    // Setting values for 'Kishan' using setter methods
    Kishan.setAge(25);
    Kishan.setSex("MALE");

    // Getting and displaying values for 'Kishan'
    Kishan.getAge(); // Displays 25
    Kishan.getSex(); // Displays MALE

    // Simulating actions for 'Kishan'
    Kishan.walk("Kishan");
    Kishan.sit("Kishan");
    Kishan.talk("Kishan");
    Kishan.run("Kishan");

    // Creating another object 'Atul' using the parameterized constructor
    Human Atul(31, "MALE");

    // Simulating actions for 'Atul'
    Atul.walk("Atul");
    Atul.getAge(); // Displays 31

    return 0;
}

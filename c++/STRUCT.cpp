#include <bits/stdc++.h> // Precompiled header that includes most standard C++ libraries
using namespace std;     // Allows the use of standard C++ functions and objects without prefixing them with 'std::'

// Define a structure for linked list nodes
struct linkedList
{
   int val;                 // Value stored in the node
   linkedList *next; // Pointer to the next node in the linked list

   // Default constructor
   linkedList()
   {
      cout << "LINKEDLIST CONSTRUCTOR CALLED!!!!" << endl;
   }

   // Parameterized constructor
   // linkedList(int x)
   // {
   //    cout << "LINKEDLIST CONSTRUCTOR CALLED WITH VALUE " << x << endl;
   //    val = x;
   //    next = NULL;
   // }

   // Constructor with initializer list to set 'val' and 'next'
   // This initializes 'val' to x and 'next' to NULL
   linkedList(int x) : val(x), next(NULL)
   {
      cout << "LINKEDLIST CONSTRUCTOR CALLED WITH VALUE " << x << endl;
   }

   // Destructor
   ~linkedList()
   {
      cout << "LINKEDLIST DESTRUCTOR CALLED!!!!" << endl;
   }
};

// Define a structure for a human
struct human
{
   int age;    // Age of the human
   string sex; // Gender of the human

   // Default constructor
   human()
   {
      cout << "HUMAN CONSTRUCTOR CALLED!!!!" << endl;
   }

   // Destructor
   ~human()
   {
      cout << "HUMAN DESTRUCTOR CALLED!!!!" << endl;
   }
};

int main()
{
   // Clear the console screen (works for Linux/Unix, use system("cls") for Windows)
   system("clear");

   cout << "Hello World\n";

   // Create the head of the linked list (first node)
   linkedList *head = new linkedList(0); // Node with value 0
   linkedList *nextt = head;             // Pointer to iterate through the linked list

   // Create the rest of the linked list nodes
   for (int i = 1; i < 10; i++)
   {
      linkedList *temp = new linkedList(i); // Create a new node with value i
      nextt->next = temp;                   // Link the new node to the previous node
      nextt = nextt->next;                  // Move to the next node
   }

   // Traverse and delete the linked list
   nextt = head; // Start from the head of the list

   while (nextt)
   {
      cout << nextt->val << endl; // Print the value of the current node
      linkedList *temp = nextt;   // Store the current node
      nextt = nextt->next;        // Move to the next node
      delete temp;                // Delete the current node
   }

   // Create a human object
   cout << "HUMAN BEGINS" << endl;

   human kishan;        // Create a human object named 'kishan'
   kishan.age = 25;     // Set the age of kishan
   kishan.sex = "Male"; // Set the gender of kishan

   // Print the human's details
   cout << kishan.age << " " << kishan.sex << endl;

   return 0; // Exit the program
}

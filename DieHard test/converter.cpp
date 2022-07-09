#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() 
{
    int i = 0;
    ifstream gdrnd("gdrnd.txt");
    ofstream gdrndBinary("gdrndBinary.txt");
    if(!gdrnd.is_open() || !gdrndBinary.is_open())
    {
        cout << "Error opening file" << endl;
        return 1;
    } else {
        string line;
        while(getline(gdrnd, line) && i++ < 10000000)
        {
            long double number = stold(line);
            gdrndBinary << int(number * INT32_MAX) << endl;
        }
    }

}
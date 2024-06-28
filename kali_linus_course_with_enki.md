Kali Linux

Kali's Relationship With Debian
The Kali Linux distribution is based on Debian Testing

In linux we can use variables
var = "sth_a"

To print it
Echo $sth_a


We can print out many global environment variables
To know them type: env 
To call it:
echo $HOME

We can modify our environment by the "bash"
We write:
.bashrc
Or .bash_profile

So we can add aliases and change terminal color

Shell variables are only for shell, neither its children nor parents are able to access them

To create a new environment variable

export NEW_USER="Bader"
To overwrite it:
export="sth $NEW_USER"
We put both inside double codes

To remove/unset it:
unset FOOD

echo $FOOD

Results: ""


To move each file with .mp3 extension
To music directory Type: 
mv *.mp3 ~/music

We call ? *  ... These symbols wildcard

This ? Signs any character so ???
Refers to 3 characters/letters in a file name 

... Wildcard is for adding second choice to a name or extension e.g:
*.mp[34]  represents for mp3 and mp4 as results.

And [CcBb]at for bat, Cat, cat, Bat

We don't add space between * and .mp3

The environmental variable WHICH gives the full PATH of the directory
E.g: WHICH ls
It's useful when having many versions of sth as py2 and 3


[find] is to find a file e.g:
find /bin/ -name "*.mp3"
Or 
find . -name "*.mp3"

To search only for files without directories type:
find . -type f -name "*user*"

If only directories add d instead of f


To find by size type:
find . -type f -size +100M

Or - for less than

To use more info:
find . -type f -size +100M
  -exec ls lh {} \;

It gives us size details

Lh here is for making size with mb not bits
As 500mb not 
4000000000

G is valid

https://man7.org/linux/man-pages/man1/ls.1.html
A reference by enki


Ls -L to see user's permissions
rwx means read write execute

Three default users in system:
(g) group 
(u) user
(o) others
We can add (a) for them all.

chmod a+x filename.php

We added execute for 'em all here
We can drop x or w by: 
chmod u-w filename.php
Or: chmod go-w filename.php

To use two users
chmod is extremely important here
We can use digits between 0 and 7
For same permissions to be in binary
000 or 001 111 and so on

So it's three permission triad:
 700 represents for u g o
So user has all, group and others have none
So computer sees it as 111 000 000
E.g: 
chmod 700 enki.code

To remove non-empty:
rm -r folderName
It even removes its directory itself
We can add sudo to it

Avoid using -f(--force) while deleting a directory 

To multiple deletion use:
rm -r /folderName/ folderName2/ folderName3


-f  to ignore non-existing files, never prompt
-r to remove directories and their contents recursively
-v to explain what is being done



I don't get these two concepts
To set modification files 
touch -d "5 minutes ago"

To wrap text with fold
fold -w11 enki.txt
It's called a single line file code

To truncate/shorten files instead of removing it:
cat /dev/null > file
This deletes the content of the file
Rather than: 
sudo rm file && touch file 
Which removes the file and create a new one.

To delete a file securely we use [shred]:
firstly we install coreUtils if not installed
2nd: It uses [GutMann ] method which is an algorithm uses 35 bits of patterns 

fast shredding: 
sudo shred -vzn 0 /dir/file

secure shredding: 
sudo shred -vzn 3 /dir/file
so it repeats shredding process randomly

-z writes zeros to hide the process at the end.



A shell is a command -line interface that connects user with operating system underlying services.
It usually referrers to bash
Dollar symbol is called the prompt $

PS1 env var is for specifying how prompt is displayed

EDITOR specifies default editor 
We can change them as vars
echo $HOME 

pushd is to save command directory in memory

It's called the directory stack
To move to a new directory use:
1) pushd projects/
2) ~/projects ~

The chicken which directory we are we use dirs

To increase readability by including index use:
-v
dirs -v 
~

To navigate the stack, append +n as +2/+4
1) pushd +3
2) ~projects/project_2

To remove items from the stack use:
popd
We can mix it with +n 

To clear the stack use -c to dirs
To undo the last step use: cd - alone


To browse into terminal we install lynx-cur:
sudo apt-get install lynx-cur
After finishing use:
lynx Your-URL-Here

We use ctrl-x-e to invoke a command line into editor 

When a program acquires opening a file it needs writing and reading permissions
Every Process assign these three secriptors;
The standard Three Streams: 
stdin, stdout stderr 
1st for [standard input] 2nd for[standard output] 3rd for [standard error]

| is a pipe operator
stdout will appear as text on the console and it's attached to a stdin process thus this is a pipeline
e.g: 
1) ps ax | grep mysql
2) 2922 ? 	S	0:00
3) 	/bin/sh /usr/bin/ mysql_safe
4) 3164 ? 	Sl 	204:21
5) 	usr/sbin/mysql

ps ax (on its own) command writes the currently-running processes to stdout
grep mysql (on its own) reads from stdin and writes "mysql" to stdout
both ps and grep are unaware of one another


input and output redirection with < and > 
> is more common because < has not much useful actions
so > can redirect the output of a process to a file
e.g: aux > ps_output.txt

crul is for sending data in and out servers
WHICH curl search for that special file, even if a normal file named with it, it can't print our 

after finding the path of curl by [WHICH curl ] we type: ls -l /usr/bin/curl [we paste real path here]

we can use them together by: ls -l $(which curl)

A simplifier way is by using ' ' instead of $(...) as:
ls -l 'which curl'

Appending Output With >> instead of > that overwrite it

consider the following example (cat will print the contents of a file to standard out):

cat bader.py
echo "your text" > bader.py // this prints it inside bader.py file and overwrite it
echo "your text" >> bader.py // This will append the text into it! 
// we call the text [stdout stream]



personal questions: what are these for?
 | ps ax grep 

To add a new user type:
useradd



E.g: 
sudo useradd -m newuser

The newuser is the user name 
And -m creates a home directory

A password is mandatory so to add it type:
sudo passwd newuser

-g is to make the user inside a specific group example:
sudo useradd -m -g admin newuser

In debian as kali we use adduser instead of useradd

To change the password use: passwd
For other users we must use sudo command:

sudo passwd bader

Then it'll ask what's the previous one then change it.
For more info search for (man passwd)

to list all existing users/ seeing users use:
cut -d: -f1 /etc/passwd

To delete a user use: 
userdel newuserORusername
to delete their hoe dir use: 
rm -r /home/newuser
 or by typing:
userdel -r newuser

To  change the shell for a user: 
chsh username

TO change user details use: 
chfn username

a tip, use: usermod as a utilizer, learn more by searching!!

-u is a sudo flag that allows us to run commands as other users

a user can be in many groups, and a group can have many users

examples:
print group can have premissions to print by an attached printer
log groups can have premissions to read log files in /var/log
; ssh to login remotely via SSH

listing groups:
the [etc/group] file contains a list of every group on the system
to see full list type:
cat /etc/group
or less /etc/group  for better experience
use [group] to see which groups are a user belongs to
e.g:
1) groups Bader
2) Bader : admin www-data rvm

every dir and  file has ownership for users and groups
use: 
ls -l or ls -ld to see who own it
e.g:
ls -ld /var/log 
......
ls -l /var/log/syslog | this one is simplier

To change file/dir and users ownership use chown command type:
1) change user permissions:
sudo chown Bader /path/to/some/file

2) change user and group:
sudo chown Bader:my-group /path/to/some/file

3) change only group:
sudo chown :any-group /path/blab/sth
if we don't have file super premission we use chmod before chown
chgro is same as chown for group

to change the user ownership of a file and its heritage/children files we use -r as:
sudo chown -R Bader:new-group /some/dir

to understand chmod more read: man chmod
examples for adding or removing w r x permissions
to make ~/waffles.txt user writable use:
1) chmod u+w  ~/waffles.txt
to make  ~/waffles.txt group writable 
2) chmod g+w  ~/waffles.txt
to make  ~/waffles.txt writable by everyone
3) chmod o+w  ~/waffles.txt
similarly o+r   g+x and other are valid
and to remove these permissoins we use minus instead of plus

Changing group membership with usermod:
e.g: 
sudo usermod -a -G new-group Bader
-a means append, so it append the user Bader  to new-group group
-G stands for not specify Bader only in that group

Quick Terminal/bash shortcuts:
ctrl-w to delete the last word;
ctrl-u to delete all the way back to the start of the line;
ctrl-k to delete up to end of the line;
alt-f to move forward by one word
alt-b to move backwards by one word;
ctrl-a to move th the beginning of the line;
ctrl-e to move to the end of the line;

ctrl+L to clear the terminal intantly, same as clear

apropos "dir*" to see search results 
-------------------------------------------------------
Conditional Command Execution:
&& operator to excute two consecutive  commands in order, eg: [ mkdir newFolder && cd newFolder ] This creates newFolder and cd into it.

OR or || to the first command fails it excutes. [ cd ~/ ↵ mkdir newFolder ↵ mkdir newFolder || cd newFolder ] when we recreate a dir it fails so we add this or or || to continue the second command

semicolon ; is a separator in linux ,so  when we add several commands at once we write this for instance:
date ; uname ; clear
it'll be sequentially nested

test built-in variable is for evaluate expressions, and when adding an expression inside two Bracket [ expression ] it gives the same results as:
test an-expression
[ any-expression ] but this Bracket one does not work with zsh shells
if true it gives 0 as a boolean value
for instane:
test 1 -lt 2 && echo true || echo false
test has some flags as for file condition checking 
-e FILE true if file exists
ASCII as =, \> ar also available


The (( and [[ Compound Commands 
While test does a good job at different operators for strings and integers comparison can be cumbersome to use. 
the (( expression )) command evaluates an arithmetic expression and returns 1 if expression evalutes to 0, and 0 otherwise. The advantage of using this command is that you don't have to escape the characters:
1- (( 1 == 2 )) && echo true || echo false
2- # false 
3- (( 4/2 - 2 )); echo $? 
4- #1

The [[ expression ]]  allows us to combine tests that are allowed for the test command 
[[ -w $HOME || 2 > 1  ]] && echo "true"
------------------------------------------------

To share files we use:
woof utility.
woof (Web Offer One File) it's a script that runs on any machine with python installed.
Download it, if not exist!

To share a file:
./woof /directory/file
I'll give us a URL that ban be typed in a browser so the download begins 

we can also share dirs:
./woof -z /directory/
It'll compress the dir into a gzipped tarball
we can share woof itself by:
./woof -s

Finding file with regexes (regular expressions)
find command supports regexes 
it can save us some time instead of using grep.
for instance:
find -type f -regex ".*/ A[^/]+\.sh$"
so it translates to find any files that starts with A and ends with a sh extension

To find files that have a title containg script as a substring and ends with .ph extesions we use:
find -type f -regex '.*script.*\.py'

To quickly identify files using file command use:

1- file /bin/bash
2- /bin/bash: ELF 64 -bit LSB executable,x86-64,
3- version 1 (SYSV) , dynamically linked
4- 
5- file zte.py
6- zte.py: ASCII text executable 
7- 
8- file messaggi.zip
9- messaggi.zip: Zip archive data, at least 
10- v1.0 to extract


Commonly linux compress files with gz extension [ .gz ] gzip 
it's designed for the GNU project.
type: 
gzip -d file.gz
gunzip file.gz

-d flag here stands for decompress. to compress it we use gzip file

To preserve permissions and structure them we use  rsync 
When we  repetitively use external drivers as e: or D: and copy from remote system to local ones
we should save our permissions 
so we use rsync :
rsync -a -v -e ssh server:/source/
   /dest/
but it needs constant syncing

---------------------------------------------------------------------------------------
umask command:
each file and dir have thier own permissions as 0777 
so we can set their values by using umask, and umask takes away permissions 

The default value when creating a directory is 777 (rwxrwxrwx)
The default value when creating a file is 666 ( rw-rw-rw-)

they both get masked by umask 

To check the current umask value with:
1 umask
2 0022 
3 touch new-file
4 ls -l new-file
5 -rw-r--r-- 1 user group 0 new-file
for a new file we use:
mkdir new-dir
ls -l new-dir
drwxr-xr-x 2 user group 4096 ./

to change the unask of current session to 007 we run:
unask 007
or 
umask u+rwx,g-rwx,o-rwx
or 
umask u=rwx,g=,o=
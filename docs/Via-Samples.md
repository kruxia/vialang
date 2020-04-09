# Via Samples
2020-04-06

```via

show patients 
	WITH format as list 
	and sort-by as name 
	and having either general-practitioner as me 
	    or resources referencing me 

show patient with id as 886286

show appointments 
	WITH format as week 
	HAVING reference TO THIS patient 
	AND HAVING start as greater than or equal to March 3 

show appointment IN THESE appointments 
	HAVING start as March 6 AT 12 pm 

ON THIS appointment 
	append comment 
	QUOTE 
		Discuss the patient’s surgery and lab results with the patient 
		and agree to a care plan. 
	END QUOTE 
	save comment 

------

define a as 1
define b as quote Hello, world end quote

define print as macro with x begin
    write x and new-line
    return x
end function

define hello-world as print with b

call hello-world

define counter as function with count as 0 begin
    define count as count
    
    comment
        parameters are immutable references —
        inner define count shadows with count parameter
    end comment

    return function begin 
        define count as count plus 1
        return count
    end function
end function

define index as call counter

define main as function begin
    define limit as read input
    define i as 1
    while i is less than limit begin
        print call fibonacci with i
        print newline
        define i as i plus 1
    end while
end function

print call index and describe main

define fibonacci as function with n begin
    if n < 3 then
        return 1
    else
        define f as fibonacci with n minus 1
        define g as fibonacci with n minus 2
        return f plus g
    end if
end function

print call index and describe fibonacci

define print-odds as function begin
    for i in range 1 to 10 begin
        if i modulus 2 equals 0 then begin
            write i and space
        end if
    end for
    print none
end function

print call index and describe print-odds

```
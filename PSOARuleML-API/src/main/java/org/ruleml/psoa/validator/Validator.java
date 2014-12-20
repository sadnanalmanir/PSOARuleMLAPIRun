package org.ruleml.psoa.validator;

import java.util.*;
import java.io.*;
import java.net.URI;

import org.ruleml.psoa.absyntax.AbstractSyntax;
import org.ruleml.psoa.absyntax.DefaultAbstractSyntax;
import org.ruleml.psoa.parser.Parser;

import gnu.getopt.LongOpt;
import gnu.getopt.Getopt;    
import org.ruleml.psoa.parser.*;
//import psoa.ruleml.*;

public class Validator {

    public static void main(String[] args) {

    	boolean importClosure = false;
    	String[] ruleBaseFileNames = null;

    	LongOpt[] longOpts = new LongOpt[256];
    	
    	// Reserved short option names: i ?
        	longOpts[0] = new LongOpt("help", LongOpt.NO_ARGUMENT, null, '?');
    	longOpts[1] = new LongOpt("import_closure", LongOpt.NO_ARGUMENT, null, 'i');

    	Getopt optionsParse = new Getopt("", args, "?i", longOpts);
    	

    	
    	
    	
    	
    	for (int opt = optionsParse.getopt();
    	     opt != -1;
    	     opt = optionsParse.getopt())
    	    {
    		switch (opt)
    		    {
    		    case '?': 
    			printUsage();
    			System.exit(1);

    		    case 'i':
    			importClosure = true;
    			break;

    		    default:
    			assert false;

    		    }; // switch (opt)


    	    }; // for (int nextOpt = optionsParse.getopt();
    	
    	int optInd = optionsParse.getOptind();

    	if (args.length > optInd)
    	    {
    		ruleBaseFileNames = new String[args.length - optInd];
    		for (int i = optInd; i < args.length; ++i)
    		    ruleBaseFileNames[i - optInd] = args[i];
    	    }
    	else
    	    {
    		System.out.println("No rule base file specified.");
    		printUsage();
    		System.exit(1);
    	    };
    	

    	try 
    	    {	
    		DefaultAbstractSyntax absSynFactory = 
    		    new DefaultAbstractSyntax();
    		
    		Parser parser = new Parser();
    	       
    		for (int i = 0; i < ruleBaseFileNames.length; ++i)
    		    {
    			System.err.println("\n\n% Processing rule base " + ruleBaseFileNames[i]);
    			File ruleBaseFile = new File(ruleBaseFileNames[i]);
    			
    			AbstractSyntax.Document doc = 
    			    parser.parse(ruleBaseFile,absSynFactory);
    			
    			System.out.println(doc.toString(" "));
    			//System.out.println(doc.toStringXML("   "));

    			System.err.println("% End of rule base " + ruleBaseFileNames[i]);

    		    }; // for (int i = 0; i < ruleBaseFileNames.length; ++i)

    	    }
    	catch (Exception ex)
    	    {
    		System.out.println("Error: " + ex);
    		ex.printStackTrace();
    		System.exit(1);
    	    };


        } // main(String[] args)



        private static void printUsage() {

    	System.out.println("Usage: Validator [OPTIONS] <rule base file>+");
    	System.out.println("Options:");
    	System.out.println("\t--help -? \n\t\t Print this message.");
    	System.out.println("\t--import_closure -i \n\t\tProcess the whole import closures of the rule bases.");
        } // printUsage() 

}

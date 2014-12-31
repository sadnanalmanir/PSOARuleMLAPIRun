package org.ruleml.psoa.restful.resources;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import org.ruleml.psoa.restful.models.TranslationRequest;
import java.net.URLDecoder;

import javax.ws.rs.*;
import javax.ws.rs.core.*;

import org.jboss.resteasy.logging.Logger;
import org.ruleml.psoa.absyntax.AbstractSyntax;
import org.ruleml.psoa.absyntax.DefaultAbstractSyntax;
import org.ruleml.psoa.absyntax.DefaultAbstractSyntax.Document;
import org.ruleml.psoa.parser.Parser;

//import ;
@Path("/translate")
public class ToTPTPResource {

    Logger logger = Logger.getLogger(ToTPTPResource.class);
    @Context
    UriInfo info;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    @Encoded
    public String translateSentences(TranslationRequest req) {

        logger.info("inside @POST method");
        String kb = decode(req.getDocument());
        
        //String query = decode(req.getQuery());
        /* only returning the kb for testing if the client can receive
         * it , hence the try/catch block is disabled here
         */
        /*
         try {
         Translator translator = null;
         switch (req.transType()) {
         case Direct:
         translator = new DirectTranslator();
         break;
         case TPTPASO:
         translator = new TPTPASOTranslator();
         break;
         }
			
         if (kb.isEmpty()) kb = null;
         if (query.isEmpty()) query = null;
         return translator.translate(kb, query);
         //			List<String> l = list();
         //			if (kb != null && !kb.isEmpty())
         //				l = deserialize(translator.translateKB(kb));
         //			
         //			if (query != null && !query.isEmpty())
         //				l.add(translator.translateQuery(query));
         } catch (TranslatorException e) {
         e.printStackTrace();
         return null;
         }
         * 
         */
//		for (String str : l) {
//			System.out.println(str);
//		}
//		TptpDocument doc = new TptpDocument();
//		doc.setSentences(l);
//		return doc;
        //returing the kb
        try {
            File f = File.createTempFile("temp", ".txt");
            FileOutputStream fos = new FileOutputStream(f);
            fos.write(kb.getBytes());

            org.ruleml.psoa.absyntax.DefaultAbstractSyntax absSynFactory
                    = new DefaultAbstractSyntax();

            //org.ruleml.psoa.parser
            org.ruleml.psoa.parser.Parser p = new Parser();
            org.ruleml.psoa.absyntax.DefaultAbstractSyntax.Document doc = (org.ruleml.psoa.absyntax.DefaultAbstractSyntax.Document) p.parse(f, absSynFactory);

            System.out.println(doc.toString("  "));
            return doc.toString("  ");
        } catch (Exception e) {
            e.printStackTrace();
            kb = e.getMessage();
        }

        return kb;
    }

    @SuppressWarnings("deprecation")
    private static String decode(String s) {
        return URLDecoder.decode(s.replace("&gt;", ">"));
    }
}

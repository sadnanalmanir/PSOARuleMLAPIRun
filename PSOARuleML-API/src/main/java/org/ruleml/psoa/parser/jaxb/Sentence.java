//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.6 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2014.12.10 at 03:21:02 PM AST 
//


package org.ruleml.psoa.parser.jaxb;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;choice>
 *         &lt;group ref="{http://www.w3.org/2011/psoa#}RULE"/>
 *         &lt;element ref="{http://www.w3.org/2011/psoa#}Group"/>
 *       &lt;/choice>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "forall",
    "implies",
    "atom",
    "equal",
    "subclass",
    "group"
})
@XmlRootElement(name = "sentence")
public class Sentence {

    @XmlElement(name = "Forall")
    protected Forall forall;
    @XmlElement(name = "Implies")
    protected Implies implies;
    @XmlElement(name = "Atom")
    protected Atom atom;
    @XmlElement(name = "Equal")
    protected Equal equal;
    @XmlElement(name = "Subclass")
    protected Subclass subclass;
    @XmlElement(name = "Group")
    protected Group group;

    /**
     * Gets the value of the forall property.
     * 
     * @return
     *     possible object is
     *     {@link Forall }
     *     
     */
    public Forall getForall() {
        return forall;
    }

    /**
     * Sets the value of the forall property.
     * 
     * @param value
     *     allowed object is
     *     {@link Forall }
     *     
     */
    public void setForall(Forall value) {
        this.forall = value;
    }

    /**
     * Gets the value of the implies property.
     * 
     * @return
     *     possible object is
     *     {@link Implies }
     *     
     */
    public Implies getImplies() {
        return implies;
    }

    /**
     * Sets the value of the implies property.
     * 
     * @param value
     *     allowed object is
     *     {@link Implies }
     *     
     */
    public void setImplies(Implies value) {
        this.implies = value;
    }

    /**
     * Gets the value of the atom property.
     * 
     * @return
     *     possible object is
     *     {@link Atom }
     *     
     */
    public Atom getAtom() {
        return atom;
    }

    /**
     * Sets the value of the atom property.
     * 
     * @param value
     *     allowed object is
     *     {@link Atom }
     *     
     */
    public void setAtom(Atom value) {
        this.atom = value;
    }

    /**
     * Gets the value of the equal property.
     * 
     * @return
     *     possible object is
     *     {@link Equal }
     *     
     */
    public Equal getEqual() {
        return equal;
    }

    /**
     * Sets the value of the equal property.
     * 
     * @param value
     *     allowed object is
     *     {@link Equal }
     *     
     */
    public void setEqual(Equal value) {
        this.equal = value;
    }

    /**
     * Gets the value of the subclass property.
     * 
     * @return
     *     possible object is
     *     {@link Subclass }
     *     
     */
    public Subclass getSubclass() {
        return subclass;
    }

    /**
     * Sets the value of the subclass property.
     * 
     * @param value
     *     allowed object is
     *     {@link Subclass }
     *     
     */
    public void setSubclass(Subclass value) {
        this.subclass = value;
    }

    /**
     * Gets the value of the group property.
     * 
     * @return
     *     possible object is
     *     {@link Group }
     *     
     */
    public Group getGroup() {
        return group;
    }

    /**
     * Sets the value of the group property.
     * 
     * @param value
     *     allowed object is
     *     {@link Group }
     *     
     */
    public void setGroup(Group value) {
        this.group = value;
    }

}

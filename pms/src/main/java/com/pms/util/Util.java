package com.pms.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

public class Util {

	public static Map<String, Object> getFieldErrors(BindingResult results) {
		Map<String, Object> fieldError = new HashMap<>();
		List<FieldError> errors = results.getFieldErrors();
		for (FieldError error : errors) {
			fieldError.put(error.getField(), error.getDefaultMessage());
		}
		return fieldError;
	}
}
